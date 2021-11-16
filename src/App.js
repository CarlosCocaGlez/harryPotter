import {useEffect, useState} from "react";
import Titulo from "./components/Titulo";
import Contenido from "./components/Contenido";
import axios from "axios";

import { createStore } from "redux";
import reducer from "./redux/reducer";
import { Provider } from "react-redux";

function App() {

    const [ loading, setLoading ] = useState(true)
    const [ hpInfo, setHpInfo ] = useState([])

    const url = 'https://onepiece-api-charleslayet.herokuapp.com/hpStudents'

    async function hpDatos() {
        try{
            const res = await axios.get(url)
            setLoading(false)
            setHpInfo(res.data)
        }catch(err){
            setLoading(false)
            console.log(err)
        }
    }

    useEffect(() => {
        hpDatos()
    }, [])

    const initialStore = {
        hpInfo: hpInfo,
        loading: loading,
        amount: 0,
        favorite: false
    }

    const store = createStore(reducer, initialStore)

  return (
    <Provider store={store}>
        <Titulo />
        <Contenido />
    </Provider>
  );
}

export default App;
