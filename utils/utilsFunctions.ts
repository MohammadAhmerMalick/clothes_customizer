import { toast, ToastOptions } from 'react-toastify'

import { ToasterInterface } from '../ts/interface'

const toasterOptions: ToastOptions = {
  position: toast.POSITION.TOP_RIGHT,
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
}

export const toaster: ToasterInterface = {
  success: (message) => toast.success(message, toasterOptions),
  error: (message) => toast.success(message, toasterOptions),
  info: (message) => toast.success(message, toasterOptions),
  warn: (message) => toast.success(message, toasterOptions),
}

export const x = 'x'
