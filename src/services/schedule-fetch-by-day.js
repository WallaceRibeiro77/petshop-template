import dayjs from "dayjs";
import { apiConfig } from "./api-config.js"

export async function scheduleFetchByDay({ date }){
    try{
        const response = await fetch (`${apiConfig.baseURL}/schedules`)

        const data = await response.json()

        console.log(data)
    } catch(error){
        console.log(error)
        alert("Não foi possivel buscar os agendamentos do dia selecionado.")
    };
}