import { useState } from 'react'
import { Divider, Input } from 'antd';

// Iteration 4
function AddFoodForm({setFoodList}) {
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0)

    const handleSubmit = event => {
        event.preventDefault()
        setFoodList(prevFoodList => [...prevFoodList, {name, image, calories, servings}])
        setName('')
        setImage('')
        setCalories('')
        setServings('')
    }
  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={event => {setName(event.target.value)}} />

      <label>Image</label>
      <Input value={image} type="text" onChange={event => {setImage(event.target.value)}} />
      {/* render antd <Input /> type="text" here */}

      <label>Calories</label>
      <Input value={calories} type="number" onChange={event => {setCalories(event.target.value)}} />
      {/* render antd <Input /> type="number" here */}

      <label>Servings</label>
      <Input value={servings} type="number" onChange={event => {setServings(event.target.value)}} />
      {/* render antd <Input /> type="number" here */}

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
