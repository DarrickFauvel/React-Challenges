import React from "react"

export default function Torch({ torchEquipped, setTorchEquipped }) {
  const handleMouseDown = () => {
    setTorchEquipped(true)
  }

  return (
    !torchEquipped && (
      <div className="inner-torch-container" onMouseDown={handleMouseDown}>
        <img src="./images/torch.png" />
        <div className="torch-flame vibrate-less">🔥</div>
      </div>
    )
  )
}
