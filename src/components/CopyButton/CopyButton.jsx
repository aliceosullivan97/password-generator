import React from 'react'
import './CopyButton.css';
import Password from '../Password/Password';

export default function CopyButton(props) {
  return (
    <div onClick={() => navigator.clipboard.writeText(password)}>CopyButton</div>
  )
}
