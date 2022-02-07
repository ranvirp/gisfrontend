
import React from 'react';
import {Button} from '@mui/material';
import {ClickableItem} from "../../../../components/clickableitem";
import GenericReportWithStickyHead, {ReportObject} from "../../../../components/reports/GenericReport";
import {GataCreateUpdateForm} from "../forms/gata";
const GataQuery = `query a {all_gata { id khatauni{ id village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  area  status }  gata_no  area  khata_no  bhaumik_year  status }  }`
const GataFilterQuery = `query a($filter:String!) {gata_by_filter(filter: $filter){ id khatauni{ id village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  area  status }  gata_no  area  khata_no  bhaumik_year  status }  }`
const GataColumns = [
{ id: 'id',label: 'Id',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'khatauni',label: 'Khatauni',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'gata_no',label: 'Gata No',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'area',label: 'Area',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'khata_no',label: 'Khata No',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'bhaumik_year',label: 'Bhaumik Year',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'status',label: 'Status',minWidth: 10, align: 'center', format: (value) => value.toString(),}
];

export const GataReportObject = new ReportObject(GataColumns,GataQuery,{},(value)=>{
    const results = value['all_gata']

    return results.map ((value)=>{ return value})
})
export const GataByFilter = (props) => {
const GataReportObject = new ReportObject(props.columns??GataColumns,GataFilterQuery,{"filter":props.filter},(value)=>{
    const results = value['gata_by_filter']
   const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={GataReportObject}/>
    )
}
export const GataAll = (props) => {
const GataReportObject = new ReportObject(props.columns??GataColumns,GataQuery,{},(value)=>{
    const results = value['all_gata']
const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}
    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={GataReportObject}/>
    )
}
export const GataWithEdit = (props) => {
GataColumns[0] = { id: 'editBtn',label: 'Action',minWidth: 10, align: 'center', format: (value) => value.toString()} 

const GataReportObject = new ReportObject(props.columns??GataColumns,GataQuery,{},(value)=>{
    const results = value['all_gata']
    const defaultValues = JSON.parse(JSON.stringify(results))



    const fn =  (value)=>{
        const value1 = JSON.parse(JSON.stringify(value))

    if (props.fn) props.fn(value)
       // if (props.fn) props.fn(value1)
        value1.khatauni = value1.khatauni.id
        const comp = <GataCreateUpdateForm pk="id" defaultValues={value1} />

        value.editBtn = <ClickableItem comp={comp} title="Edit"/>

        return value
    }

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={GataReportObject}/>
    )
}
export const GataList = <GenericReportWithStickyHead reportObject={GataReportObject}/>
   