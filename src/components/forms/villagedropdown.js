import React, {useEffect} from 'react';
import {Dropdown} from "./Dropdown";
import {postGraphSqlQuery} from "../fetcher/graphsqlfetcher";
import Stack from "@mui/material/Stack";
import {graphqlurl} from "../../apps/upchakbandi/settings";
import Typography from "@mui/material/Typography";
import {Box, Grid} from "@mui/material";

const  queryvillage = ` query something($teh:String!){
villages(vill: { tehsil_code:$teh}) {
        key
        value
        label
    }
}
`

const  querytehsil = `
query something($dist:String!){
    tehsils(tehsil: {district_code:$dist}) {

        key
        value
        label
    }
}
`

const querydistrict = `
query something{
    districts {

        key
        value
        label
    }
}
`

export function Villagedropdown(props) {
    // console.log(props)

    var selectedValues = {fieldA: null, fieldB: null, fieldC: null}

    const [state, setState] = React.useState({fieldA: [{label:'Loading..', value:'Loading', key:'..'}], fieldB: [], fieldC: [], selectedValues:selectedValues})
    const  getDists = async (e) => {
        var dists = await postGraphSqlQuery(graphqlurl, querydistrict,{})
         dists = dists.errors? {districts:{value:'error'}}:dists.data
                setState({...state,fieldA: dists['districts'], fieldB:[], fieldC:[]})
    }
    const getTehsils = async (e)=> {
        const dist = e.target.value
        setState({...state,fieldB: [{label:'Loading..', value:'Loading', key:'..'}], fieldC:[]})
        var tehsils = await postGraphSqlQuery(graphqlurl, querytehsil,{'dist':dist})
        tehsils = tehsils.errors? {tehsils:{value:'error'}}:tehsils.data
        setState({...state,fieldB: tehsils['tehsils'], fieldC:[]})

    }
    const getVillages = async (e)=> {
        var district_code = state.selectedValues.fieldA
        var tehsil_code = state.selectedValues.fieldB
        setState({...state,fieldC:[{label:'Loading..', value:'Loading', key:'..'}] })
        var villages = await postGraphSqlQuery(graphqlurl, queryvillage,{ 'teh':tehsil_code})
        villages = villages.errors? {villages:{value:'error'}}:villages.data 
        setState({...state,fieldC: villages['villages']})
    }
    useEffect(()=>{
        getDists()},[])

    const changeFunctionA = (e) => {
        state.selectedValues.fieldA = e.target.value
        console.log('tehsil',e.target.value)
        getTehsils(e)
    }
    const changeFunctionB = (e) => {
        state.selectedValues.fieldB = e.target.value
        getVillages(e)
    }


    return (
       <Stack direction={"row"} spacing={2}>
            <Typography component={"span"}>{props.label}{props.required?'*':''}</Typography>


    <Stack  direction="row" justifyContent="space-evenly">

    <Dropdown fullWidth values={state.fieldA} onChange={changeFunctionA} id={props.fieldAId} onBlur={getDists}
                      name={props.fieldAName} label={props.fieldALabel?props.fieldALabel:'District'} onBlur={getDists}/>
            <Dropdown fullWidth values={state.fieldB} onChange={changeFunctionB} id={props.fieldBId}
                      name={props.fieldBName} label={props.fieldBLabel?props.fieldBLabel:'Tehsil'}/>
            <Dropdown fullWidth values={state.fieldC} onChange={props.onChange} id={props.fieldCId}
                      name={props.name}  {...props} label={props.fieldCLabel??'Village'}/>


        </Stack>
</Stack>

    );
}




