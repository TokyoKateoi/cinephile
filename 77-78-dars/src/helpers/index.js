export function getRuntime(minutes){
    minutes = minutes?.length ? minutes[0] : minutes
    if(minutes){
        let h = Math.floor(minutes / 60)
        let m = minutes -  (h * 60)
        if(minutes < 60) return `${m} минут`
        return `${h} час : ${m} минут`
    }else{
        return 'Daqiqalar topilmadi!'
    }
}