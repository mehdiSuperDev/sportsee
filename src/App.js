import { useState, useEffect } from "react";
import UserService from "./services/ApiService.js";

function App() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    UserService.getInformation(12)
      .then(response => {
        const data = response.data.data;

        console.log(data);
        setUser(data)}
      )
      .catch(err => console.log(err))
  }, [])

  return (
    <>
    <h1>Test APIService</h1>
    <div>
      <p>{user ? `${user.userInfos.firstName} ${user.userInfos.lastName}` : "Loading"}</p> 
      <p>{user ? `Age: ${user.userInfos.age}` : null}</p>
    </div>
    <div>
      <p>Today's score: {user ? user.todayScore : null}</p>
    </div>
    <div>
      <p>Calorie count: {user ? user.keyData.calorieCount : null}</p>
      <p>Protein count: {user ? user.keyData.proteinCount : null}</p>
      <p>Carbohydrate count: {user ? user.keyData.carbohydrateCount : null}</p>  
      <p>Lipid count: {user ? user.keyData.lipidCount : null}</p>
    </div>
    </>
  );
}

export default App;
