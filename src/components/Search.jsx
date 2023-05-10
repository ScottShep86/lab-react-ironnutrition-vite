// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { useState } from 'react'
import { Divider, Input } from 'antd';

// Iteration 5
function Search({foodList, setFoodList}) {
    const [search, setSearch] = useState('')

    const handleInput = (event) => {
        event.preventDefault()
        const foundFoods = foodList.filter((food) => {
            return(food.name.toLowerCase().includes(search.toLowerCase()))
        })
        setFoodList(foundFoods)
    };
        /* foodList.filter((foodList) => {
            return foodList.name.match(search);
        });
     */
  return (
    <form onSubmit={handleInput}>
      <Divider>Search</Divider>

      <Input value={search} name='search' type="text" onChange={(event) => {setSearch(event.target.value)}} />

      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
