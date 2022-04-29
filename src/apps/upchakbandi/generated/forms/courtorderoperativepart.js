
import React from "react"
import {useForm} from "react-hook-form";
import {ReactHookFormInput} from "../../../../components/forms/ReactHookFormInput";
import {Stack, Button, Box} from "@mui/material";
import {yupResolver} from "@hookform/resolvers/yup";

import * as yup from 'yup'
import {graphqlFetch} from "../../../common/hooks/GraphQLHooks";
import defaultComponents from "../../inputparameters";

export const createUpdateCourtOrderOperativePartMutation = `mutation something($id:String, $court_order:String!, $before_khata:String!, $before_category:String!, $before_gata:String!, $before_gata_area:String!, $before_khatedar_code:String!, $before_khatedar:String!, $before_khatedar_name:String!, $before_relative_name:String!, $before_relation_name:String!, $before_share:String!, $before_exchange_ratio:String!, $after_khata:String!, $after_category:String!, $after_gata:String!, $after_gata_area:String!, $after_khatedar_code:String!, $after_khatedar:String!, $after_khatedar_name:String!, $after_relative_name:String!, $after_relation_name:String!, $after_share:String!, $after_exchange_ratio:String!, $date_of_effect:String!){
    create_update_court_order_operative_part(id: $id, court_order: $court_order, before_khata: $before_khata, before_category: $before_category, before_gata: $before_gata, before_gata_area: $before_gata_area, before_khatedar_code: $before_khatedar_code, before_khatedar: $before_khatedar, before_khatedar_name: $before_khatedar_name, before_relative_name: $before_relative_name, before_relation_name: $before_relation_name, before_share: $before_share, before_exchange_ratio: $before_exchange_ratio, after_khata: $after_khata, after_category: $after_category, after_gata: $after_gata, after_gata_area: $after_gata_area, after_khatedar_code: $after_khatedar_code, after_khatedar: $after_khatedar, after_khatedar_name: $after_khatedar_name, after_relative_name: $after_relative_name, after_relation_name: $after_relation_name, after_share: $after_share, after_exchange_ratio: $after_exchange_ratio, date_of_effect: $date_of_effect) {
       
      ok
      errormessage

    }
    }`



const yupSchema = yup.object({
before_gata_area: yup.number().required(),
before_khatedar_code: yup.string().required(),
before_khatedar_name: yup.string().required(),
before_relative_name: yup.string().required(),
before_relation_name: yup.string().required(),
before_share: yup.number().required(),
before_exchange_ratio: yup.string().required(),
after_gata_area: yup.number().required(),
after_khatedar_code: yup.string().required(),
after_khatedar_name: yup.string().required(),
after_relative_name: yup.string().required(),
after_relation_name: yup.string().required(),
after_share: yup.number().required(),
after_exchange_ratio: yup.string().required(),
 }).required();

const query = 'query a($filter:String!){court_order_operative_part_by_filter(filter:$filter) { id court_order{ id  chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status }  case_no  date_of_order  operative_part } before_khata{ id  khata_no  category{ code  category  name }  area  status } before_category{ code  category  name } before_gata{ id  khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  gata_no  area  khata_no  bhaumik_year  status }  before_gata_area  before_khatedar_code before_khatedar{ id  khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  khata_no  farmer{ id  chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status }  khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  unique_id  khatedar_code  mobile_no  name  minimized_name  name_eng  minimized_name_eng  relationship  relative_name  relative_name_minimized  year_of_birth  gender  address  status }  khatedar_code  slno_in_khata  share  status }  before_khatedar_name  before_relative_name  before_relation_name  before_share  before_exchange_ratio after_khata{ id  khata_no  category{ code  category  name }  area  status } after_category{ code  category  name } after_gata{ id  khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  gata_no  area  khata_no  bhaumik_year  status }  after_gata_area  after_khatedar_code after_khatedar{ id  khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  khata_no  farmer{ id  chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status }  khatauni{ id  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  no_of_khatas  no_of_gatas  area  status }  unique_id  khatedar_code  mobile_no  name  minimized_name  name_eng  minimized_name_eng  relationship  relative_name  relative_name_minimized  year_of_birth  gender  address  status }  khatedar_code  slno_in_khata  share  status }  after_khatedar_name  after_relative_name  after_relation_name  after_share  after_exchange_ratio  date_of_effect }  }'

export const CourtOrderOperativePartCreateUpdateForm = (props)=> {
const [errormessage,setErrorMessage] = React.useState('')
const form = useForm({resolver:yupResolver(yupSchema)})
const [id,setId] = React.useState(null)

function search(){
  let data = form.getValues()
  
  Object.keys(data).map(value=>{
    if (data[value]==='') delete data[value]
  })
  
  graphqlFetch(query,{filter:JSON.stringify(data)},'court_order_operative_part_by_filter').then(({items,errors,success})=>{
    if (success && items.length==1) {
       form.setValue("court_order", items[0]["court_order"]["id"])
form.setValue("before_khata", items[0]["before_khata"]["id"])
form.setValue("before_category", items[0]["before_category"]["code"])
form.setValue("before_gata", items[0]["before_gata"]["id"])
form.setValue("before_gata_area",items[0]["before_gata_area"])
form.setValue("before_khatedar_code",items[0]["before_khatedar_code"])
form.setValue("before_khatedar", items[0]["before_khatedar"]["id"])
form.setValue("before_khatedar_name",items[0]["before_khatedar_name"])
form.setValue("before_relative_name",items[0]["before_relative_name"])
form.setValue("before_relation_name",items[0]["before_relation_name"])
form.setValue("before_share",items[0]["before_share"])
form.setValue("before_exchange_ratio",items[0]["before_exchange_ratio"])
form.setValue("after_khata", items[0]["after_khata"]["id"])
form.setValue("after_category", items[0]["after_category"]["code"])
form.setValue("after_gata", items[0]["after_gata"]["id"])
form.setValue("after_gata_area",items[0]["after_gata_area"])
form.setValue("after_khatedar_code",items[0]["after_khatedar_code"])
form.setValue("after_khatedar", items[0]["after_khatedar"]["id"])
form.setValue("after_khatedar_name",items[0]["after_khatedar_name"])
form.setValue("after_relative_name",items[0]["after_relative_name"])
form.setValue("after_relation_name",items[0]["after_relation_name"])
form.setValue("after_share",items[0]["after_share"])
form.setValue("after_exchange_ratio",items[0]["after_exchange_ratio"])
form.setValue("date_of_effect",items[0]["date_of_effect"])

       setId(items[0]['id'])
      
    }
    
  })
}
function reset(e)
{
  form.reset()  
  setId(null)
}
function onSubmit(data)
{
    
Object.keys(data).map(value=>{
     data[value] = String(data[value])
 })
    graphqlFetch(createUpdateCourtOrderOperativePartMutation, data, 'create_update_court_order_operative_part').then(({items,errors,success})=>{
 if (errors.length > 0) {
            setErrorMessage(errors.toString)
            return
        }
        let errormessage = items.errormessage?.toString()
        let errorMessage = 'Success'
        if (errormessage) errorMessage = "Error during form submission: " + errormessage
        else form.reset()
        setErrorMessage((errorMessage))


    })


}
    return(
        <Stack>
        <form onSubmit={form.handleSubmit(onSubmit)}>
               <Stack>
                   <Box sx={{color:errormessage === 'Success'? 'green':"red"}}>{errormessage}</Box>
                    <ReactHookFormInput  form={form} comp={defaultComponents["court_order"]} name={"court_order"} label={"Court Order"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["before_khata"]} name={"before_khata"} label={"Before Khata"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["before_category"]} name={"before_category"} label={"Before Category"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["before_gata"]} name={"before_gata"} label={"Before Gata"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["before_gata_area"]} name={"before_gata_area"} label={"Before Gata Area"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["before_khatedar_code"]} name={"before_khatedar_code"} label={"Before Khatedar Code"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["before_khatedar"]} name={"before_khatedar"} label={"Before Khatedar"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["before_khatedar_name"]} name={"before_khatedar_name"} label={"Before Khatedar Name"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["before_relative_name"]} name={"before_relative_name"} label={"Before Relative Name"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["before_relation_name"]} name={"before_relation_name"} label={"Before Relation Name"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["before_share"]} name={"before_share"} label={"Before Share"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["before_exchange_ratio"]} name={"before_exchange_ratio"} label={"Before Exchange Ratio"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["after_khata"]} name={"after_khata"} label={"After Khata"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["after_category"]} name={"after_category"} label={"After Category"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["after_gata"]} name={"after_gata"} label={"After Gata"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["after_gata_area"]} name={"after_gata_area"} label={"After Gata Area"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["after_khatedar_code"]} name={"after_khatedar_code"} label={"After Khatedar Code"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["after_khatedar"]} name={"after_khatedar"} label={"After Khatedar"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["after_khatedar_name"]} name={"after_khatedar_name"} label={"After Khatedar Name"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["after_relative_name"]} name={"after_relative_name"} label={"After Relative Name"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["after_relation_name"]} name={"after_relation_name"} label={"After Relation Name"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["after_share"]} name={"after_share"} label={"After Share"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["after_exchange_ratio"]} name={"after_exchange_ratio"} label={"After Exchange Ratio"}/>
<ReactHookFormInput  form={form} comp={defaultComponents["date_of_effect"]} name={"date_of_effect"} label={"Date Of Effect"}/>
                    
                   <Stack direction="row"> <Button onClick={reset}>Reset</Button> <Button onClick={search}>Search</Button> <Button type="submit">{id?'Update':'Submit'}</Button> </Stack>
               </Stack>

        </form>
        </Stack>
    )
}
    