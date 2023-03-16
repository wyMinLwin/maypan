import React, { ReactNode } from 'react'
import { createPortal } from 'react-dom'

type ModelOverlayProps = {
    children: ReactNode,
    modelOpen: boolean,
} 

const ModelOverlay = (props:ModelOverlayProps) => {
  return (
    <>
    { props.modelOpen?
        createPortal(props.children,document.getElementById('overlayModel') as HTMLElement)
    :<></>
    }
    </>
  )
}

export default ModelOverlay