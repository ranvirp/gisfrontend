
import React from 'react';
import {Button} from '@mui/material';
import {ClickableItem} from "../../../../components/clickableitem";
import GenericReportWithStickyHead, {ReportObject} from "../../../../components/reports/GenericReport";
import {KhatedarCreateUpdateForm} from "../forms/khatedar";
const KhatedarQuery = `query a {all_khatedar { id khatauni{ id village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  area  status } khata{ id khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  area  status }  khata_no category{ code  category  category_eng  name  name_eng }  area  status } khatedar{ id khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  area  status }  unique_id  khatedar_code  mobile_no  name  relationship  relative_name  year_of_birth  gender  majra  status }  slno_in_khata  share  status }  }`
const KhatedarFilterQuery = `query a($filter:String!) {khatedar_by_filter(filter: $filter){ id khatauni{ id village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  area  status } khata{ id khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  area  status }  khata_no category{ code  category  category_eng  name  name_eng }  area  status } khatedar{ id khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  area  status }  unique_id  khatedar_code  mobile_no  name  relationship  relative_name  year_of_birth  gender  majra  status }  slno_in_khata  share  status }  }`
const KhatedarColumns = [
{ id: 'id',label: 'Id',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'khatauni',label: 'Khatauni',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'khata',label: 'Khata',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'khatedar',label: 'Khatedar',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'slno_in_khata',label: 'Slno In Khata',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'share',label: 'Share',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'status',label: 'Status',minWidth: 10, align: 'center', format: (value) => value.toString(),}
];

export const KhatedarReportObject = new ReportObject(KhatedarColumns,KhatedarQuery,{},(value)=>{
    const results = value['all_khatedar']

    return results.map ((value)=>{ return value})
})
export const KhatedarByFilter = (props) => {
const KhatedarReportObject = new ReportObject(props.columns??KhatedarColumns,KhatedarFilterQuery,{"filter":props.filter},(value)=>{
    const results = value['khatedar_by_filter']
   const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={KhatedarReportObject}/>
    )
}
export const KhatedarAll = (props) => {
const KhatedarReportObject = new ReportObject(props.columns??KhatedarColumns,KhatedarQuery,{},(value)=>{
    const results = value['all_khatedar']
const fn =  (value)=>{ 
    if (props.fn) props.fn(value)
    return value}
    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={KhatedarReportObject}/>
    )
}
export const KhatedarWithEdit = (props) => {
KhatedarColumns[0] = { id: 'editBtn',label: 'Action',minWidth: 10, align: 'center', format: (value) => value.toString()} 

const KhatedarReportObject = new ReportObject(props.columns??KhatedarColumns,KhatedarQuery,{},(value)=>{
    const results = value['all_khatedar']
     const comp = <KhatedarCreateUpdateForm pk="id" defaultValues={results} />
    
    const fn =  (value)=>{ 
    value.editBtn = <ClickableItem comp={comp} title="Edit"/>
    if (props.fn) props.fn(value)
    return value}

    return results.map (fn)
})
    return (
       <GenericReportWithStickyHead reportObject={KhatedarReportObject}/>
    )
}
export const KhatedarList = <GenericReportWithStickyHead reportObject={KhatedarReportObject}/>
   