import React from "react";
import {TextField, Button} from "@mui/material";
import {Villagedropdown} from "../../components/forms/villagedropdown";
import {FasliYearForm} from "../common/components/forms/fasliyear";
import {KhatauniTypeForm} from "../common/components/forms/khataunitype";
import LandCategoryDropdown from "../common/components/forms/landcategories";
import KhatauniDropdown from "../common/components/forms/khataunies";
import {RelativesDropdown} from "../common/components/forms/relatives";
import {GendersDropdown} from "../common/components/forms/genders";
import {KhatedarCodeForm} from "./components/forms/KhatedarCode";
import {ChakbandiDefaultField} from "./components/forms/ChakbandiDefaultField";
export function getButton()
{
    return (<Button type="submit">Submit</Button>)
}
export function getInputParameters(component, input)
{
    var components = {}
    components.fasli_year = <FasliYearForm/>
    components.bhaumik_year = <FasliYearForm/>
    components.type_of_khatauni = <KhatauniTypeForm/>
    components.category = <LandCategoryDropdown/>
    components.khatauni = <KhatauniDropdown/>
    components.relationship = <RelativesDropdown/>
    components.gender = <GendersDropdown/>
    components.date_of_petition =       <TextField

        type="date"
        defaultValue="2017-05-24"
        sx={{ width: 220 }}
        InputLabelProps={{
            shrink: true,
        }}
    />
    var myprops = {}
    myprops.no_of_khatas = {type:'number'}
    myprops.khatauni = {defaultValue:localStorage.khatauni_id, disabled:true}
    var values = {}
    values.Khatauni = {}
    values.Khatauni.village = {}
    values.Khatauni.village.component = <Villagedropdown/>
    values.Khatauni.fasli_year = {}
    values.Khatauni.fasli_year.component = <FasliYearForm/>
    var x = {}
    x.component = values[component]?.[input]?.component ?? components[input]
    x.component = x.component ?? <TextField/>
    x.required = values[component]?.[input]?.['required']

    x.required = x.required ?? true
    x.props = myprops[input] ?? {}
    return x
}
var defaultComponents = {}
defaultComponents.fasli_year = <FasliYearForm/>
defaultComponents.bhaumik_year = <FasliYearForm/>
defaultComponents.type_of_khatauni = <KhatauniTypeForm/>
defaultComponents.category = <LandCategoryDropdown/>
defaultComponents.khatauni = <KhatauniDropdown/>
defaultComponents.relationship = <RelativesDropdown/>
defaultComponents.gender = <GendersDropdown/>
defaultComponents.date_of_petition =       <TextField

    type="date"
    defaultValue="2017-05-24"
    sx={{ width: 220 }}
    InputLabelProps={{
        shrink: true,
    }}
/>
defaultComponents.date_of_deed =       <TextField

    type="date"
    defaultValue="2017-05-24"
    sx={{ width: 220 }}
    InputLabelProps={{
        shrink: true,
    }}
/>
defaultComponents.khatedar_code = <KhatedarCodeForm/>
defaultComponents.chakbandi = <ChakbandiDefaultField/>
defaultComponents.transferor = <KhatedarCodeForm/>
defaultComponents.transferee = <KhatedarCodeForm/>


var myprops = {}
myprops.no_of_khatas = {type:'number'}
myprops.khatauni = {defaultValue:localStorage.khatauni_id}
myprops.chakbandi = {defaultValue:localStorage.chakbandi_id}


export default defaultComponents
export const defaultProps = myprops
