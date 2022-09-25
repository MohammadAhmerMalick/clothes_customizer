import { toast, ToastOptions } from 'react-toastify'

import { LinkInterface, ToasterInterface } from '../ts/interface'

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
  error: (message) => toast.error(message, toasterOptions),
  info: (message) => toast.info(message, toasterOptions),
  warn: (message) => toast.warn(message, toasterOptions),
}

export const capitalize = (string: string) =>
  string ? string.charAt(0).toUpperCase() + string.slice(1) : ''

export const scaleCloudinaryImage = (
  link: string,
  width: number
): LinkInterface => ({
  originalLink: link,
  scaledLink: `${
    link.split('image/upload/')[0]
  }image/upload/c_scale,w_${width}/${link.split('image/upload/')[1]}`,
})
