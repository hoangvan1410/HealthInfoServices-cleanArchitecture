const express = require('express');
const bodyParser = require ('body-parser');
const AddHealthInfo = require('../../application/use_cases/AddHealthInfo');
const GetAllHealthInfos = require('../../application/use_cases/GetAllHealthInfo');
const GetHealthInfo = require('../../application/use_cases/GetHealthInfo');
//const HealthInfo = require('../../entities/HealthInfo');

module.exports = (dependencies)=>{

    const {healthInfoRepository} = dependencies.DatabaseService;

    const addNewHealthInfo = (req,res,next) => {
        const AddHealthInfoCommand = AddHealthInfo(healthInfoRepository);

        const {height,weight,age,gender,medic_his} = req.body;

        AddHealthInfoCommand.Execute(height,weight,age,gender,medic_his).then((response)=>{
            res.json(response);
        },(err)=>{
            next(err);
        });
    }       

    const getAllHealthInfo = (req,res,next)=>{
        const GetAllHealthInfoQuery = GetAllHealthInfos(healthInfoRepository);

        GetAllHealthInfoQuery.Execute().then((healthInfos)=>{
            res.json(healthInfos);
        },(err)=>{
            next(err);
        }).catch(next);
    };

    const getHealthInfo = (req,res,next) =>{
        const GetHealthInfoQuerry = GetHealthInfo(healthInfoRepository);

        GetHealthInfoQuerry.Execute(req.params.healthInfoId).then((healthInfo)=>{
            res.json(healthInfo);
        },(err)=>{
            next(err);
        });
    };

    return{
        addNewHealthInfo,
        getAllHealthInfo,
        getHealthInfo
    };
}