const pick = require('lodash/fp/pick')


const HealthInfosController = (container) => ({
    listHealthInfos: async (req,res)=>{
        const {ListHealthInfos}=container
        const healthInfos = await ListHealthInfos()
        return healthInfos
    },

    createHealthInfo: async(req,res)=>{
        const {CreateHealthInfo}=container
        const {height, weight, age, gender, medic_his} =req.body

        const healthInfo = await CreateHealthInfo(
            height,
            weight,
            age,
            gender, 
            medic_his
        )

        res.code(201).send(healthInfo)
    },

    findHealthInfo: async(req, res) => {
        const { GetHealthInfo}=container
        
        const healthInfo = await GetHealthInfo(req.params.id)
        return healthInfo
    },

    findHealthInfoByAge: async(req, res) => {
        const { GetHealthInfoByUserId}=container
        
        const healthInfo = await GetHealthInfoByUserId(req.params.age)
        //res.code(200)
        return healthInfo
    },

    deleteHealthInfo: async (req,res)=>{
        const {DeleteHealthInfo}=container

        const healthInfo = await DeleteHealthInfo(req.params.id)
        return healthInfo
    },

    updateHealthInfo: async(req,res)=> {
        const {UpdataHealthInfo}=container

        const permitted= [
            'height',
            'weight',
            'age',
            'gender',
            'medic_his'
        ]

        const healthInfo = await UpdataHealthInfo(req.params.id,pick(permitted,req.body))
        return healthInfo
    }


})

module.exports = HealthInfosController