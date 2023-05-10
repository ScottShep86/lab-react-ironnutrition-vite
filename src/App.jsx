import { useState } from "react";
import "./App.css";
import foods from "./foods.json";
import { Row, Divider, Button } from "antd";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";

function App() {
  const [foodList, setFoodList] = useState(foods);

  const deleteFood = (currentFood) => {
    let filteredFood = foodList.filter((currentElement) => {
      return currentElement.name !== currentFood.name;
    });
    setFoodList(filteredFood);
  };


  return (
    <div className="App">
      {/* Display Add Food component here */}
      <AddFoodForm setFoodList={setFoodList} />

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}
      <Search foodList={foodList} setFoodList={setFoodList} />

      <Divider>Food List</Divider>

      <Row style={{ width: "100%", justifyContent: "center" }}>
        {/* Render the list of Food Box components here */}
        {foodList.map((food) => {
          return (
            <FoodBox key={food.name} food={food} deleteFood={deleteFood} />
          );
        })}
      </Row>
    </div>
  );
}

export default App;

/* <h1>Food List</h1>
      {foodList.map((food) => {
      return(
      <div key={food.id}>
        <p> {food.name} </p>
        <img src={food.image} alt={food.name} width={200} />
      
      </div>
      );
    })} */
