import Swal from 'sweetalert2';


export  function useToast(icon:any, title:any, content?:any) {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    Toast.fire({
        text: content,
        title: title,
        icon: icon,

    })

}

export function useAlert(icon:any, title:any, content:any) {
    Swal.fire({
        icon: icon,
        title: title,
        text: content,
    })
}