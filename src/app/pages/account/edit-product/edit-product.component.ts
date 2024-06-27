import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { Product } from 'src/app/interfaces/products.interface';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  @Input() product: Product | null = null;

  productForm!: FormGroup;
  productId: number | null = null;
  selectedFile: File | null = null;
  imagePreview: string | null = null;

  @ViewChild('fileInput') fileInput: any;

  constructor(
    private formBuilder: FormBuilder,
    protected apiService: ApiService,
    private modalController: ModalController,
    private toastController: ToastController
  ) {
    this.productForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.required],
    });
  }

  ngOnInit() {
    if (this.product) {
      this.productForm.patchValue(this.product);

      // Si estamos editando un producto, mostramos su imagen actual
      if (this.product.imagen) {
        this.imagePreview = this.apiService.getProductImage(this.product.imagen, this.product.placeholder);
      } 
    }
  }

  closeModal() {
    this.modalController.dismiss();
  }

  selectImage() {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement | null; // Obtén el elemento por ID
    if (fileInput) {
      fileInput.click(); // Simula un clic en el input de archivo
    } else {
      console.error('Elemento fileInput no encontrado');
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];

    // Actualiza la vista previa de la imagen
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imagePreview = e.target.result;
    };
    if ( this.selectedFile )
      reader.readAsDataURL(this.selectedFile);
  }

  submitForm() {
    const formData = new FormData();
    formData.append('nombre', this.productForm.value.nombre);
    formData.append('descripcion', this.productForm.value.descripcion);
    formData.append('precio', this.productForm.value.precio);
    if (this.selectedFile)
      formData.append('imagen', this.selectedFile, this.selectedFile.name);

    if (this.product) {
      // Editar producto existente
      this.apiService.updateProduct(this.product.id_producto, formData).subscribe(
        async (response) => {
          const toast = await this.toastController.create({
            message: response,
            duration: 2000,
            position: 'top'
          });
          toast.present();
          this.closeModal(); // Cierra el modal después de editar
        },
        async (error) => {
          const toast = await this.toastController.create({
            message: error.error,
            duration: 2000,
            position: 'top'
          });
          toast.present();
        }
      );
    } else {
      // Crear nuevo producto
      this.apiService.createProduct(formData).subscribe(
        async (response) => {
          const toast = await this.toastController.create({
            message: response,
            duration: 2000,
            position: 'top'
          });
          toast.present();
          this.closeModal(); // Cierra el modal después de crear
        },
        async (error) => {
          const toast = await this.toastController.create({
            message: error.error,
            duration: 2000,
            position: 'top'
          });
          toast.present();
        }
      );
    }
  }
}