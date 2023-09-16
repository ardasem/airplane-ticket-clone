import { Provider } from "react-redux";
import store from "./redux/store";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AvailableFlights from "./pages/AvailableFlights/AvailableFlights";
import SelectedFlight from "./pages/SelectedFlight/SelectedFlight";
import Payment from "./pages/Payment/Payment";



function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/available-flights" element={<AvailableFlights />} />
          <Route path="/selected-flight" element={<SelectedFlight />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
