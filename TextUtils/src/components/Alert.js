import React from 'react'

export default function Alert(props) {
  return (
    props.alert && <div class="alert alert-primary" role="alert">
        <b>{props.alert}</b>
    </div>
  )
}
