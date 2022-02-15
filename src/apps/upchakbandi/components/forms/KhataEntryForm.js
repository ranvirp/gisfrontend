import React, {useEffect} from "react"
import * as yup from 'yup'
import defaultComponents, {defaultProps, getButton} from "../../inputparameters";
import {
    FieldArrayReactHookFormComponent,
    ReactHookForm,
    ReactHookFormComponent,
    ReactHookFormObject
} from "../../../../components/forms/ReactHookFormComponent";
import {Stack} from "@mui/material";
import {control} from "leaflet/dist/leaflet-src.esm";
import Button from "@material-ui/core/Button";
import {GenericReport, ReportObject} from "../../../../components/reports/GenericReport";
import BasicTable from "../../../../components/tables/tables";
import {postGraphSqlQuery} from "../../../../components/fetcher/graphsqlfetcher";
import {graphqlurl} from "../../settings";
import {useFieldArray, useForm} from "react-hook-form";


const fields2 = [
   // {id:'gata_no[0]',label:'Gata No'},
   // {id:'area[0]',label:'Area'},

]
const yupSchema = yup.object({
    khata_no:yup.number().integer().required(),

    gata_no:yup.array(yup.string().required()),
    area:yup.array(yup.number().required()),
    fasli_year:yup.array(yup.number().required())
}).required()
const mycolumns = [
    { id: 'form',label: 'Previous Values',minWidth: 10, align: 'center', format: (value) => value.toString(),},
   // { id: 'area',label: 'Area',minWidth: 10, align: 'center', format: (value) => value.toString(),},
    //{ id: 'bhaumik_year',label: 'Fasli Year',minWidth: 10, align: 'center', format: (value) => value.toString(),},

];

export function KhataEntryForm(props)
{
     const [state,setState] = React.useState({khata_no:''})
      const mainForm = useForm()
    const newForm = useForm()
    const gataForm = useForm()
   // const mainFieldArray = useFieldArray({control:mainForm.control,name:"main"})
    //const newFieldArray = useFieldArray({control:newForm.control,name:"gatas"})
    //const gataFieldArray = useFieldArray({control:gataForm.control,name:"additional"})




    const fields1 = [
            {name:'khata_no',label:'Khata No', required:true, onChange:e=>{

                    const khata_no = e.target.value
                    if (khata_no.length > 0) {
                       //props.setValue({additional:[]})
                        //newForm.setValue('test',[])
                        newForm.reset()

                        setState({ khata_no: khata_no})
                        e.target.focus()

                    }
                }},
            {name:'btn', label:'Btn', comp:<Button onClick={async (e)=>{

                    //console.log(newForm.getValues())
                    //console.log(gataForm.getValues())
                    const gatas = newForm.watch('gatas')
                    const additional = gataForm.watch('additional')
                    var finalGatas = []
                    if(gatas)  gatas.map((value)=>{
                        const newObj = {}
                        value.map((newValue)=>{
                            newObj[newValue.name] = newValue[newValue.name]?? newValue.defaultValue
                        })
                        // newObj.area = value[0][value[0].name] ?? value[0].defaultValue
                        //newObj.gata_no = value[1].gata_no ?? value[1].defaultValue
                        //newObj.bhaumik_year = value[2].bhaumik_year ?? value[2].defaultValue
                        finalGatas.push(newObj)

                    })
                    if (additional) additional.map((value)=>{
                        const newObj = {}
                        value.map((newValue)=>{
                            newObj[newValue.name] = newValue[newValue.name]?? newValue.defaultValue
                        })
                       // newObj.area = value[0][value[0].name] ?? value[0].defaultValue
                        //newObj.gata_no = value[1].gata_no ?? value[1].defaultValue
                        //newObj.bhaumik_year = value[2].bhaumik_year ?? value[2].defaultValue
                        finalGatas.push(newObj)

                    })
                    console.log(gatas)
                    console.log(additional)
console.log(finalGatas)

                    //   const results = await newForm.handleSubmit((value)=>{console.log(value)},(value)=>{console.log(value)})


            }}>Submit</Button> }
        ]
        const form1 = new ReactHookFormObject(defaultProps, defaultComponents,fields1)
        const fn = data => {


            var no = 0
            const results = data['gata_by_filter']

            const newresults =  results.map((d,index) => {
                no = no + 1
               // console.log(no)
                const fields = [
                    {name: `gata_no`, label: 'Gata No', required: true, defaultValue: d['gata_no']},
                    {name: `area`, label: 'Area', required: true, defaultValue: d['area']},
                    {name: `bhaumik_year`, label: 'Fasli Year', required: true, defaultValue: d['bhaumik_year']},

                ]
                const form2 = new ReactHookFormObject(defaultProps, defaultComponents, fields)

                return {
                    form: <FieldArrayReactHookFormComponent  componentRootName={`gatas[${index}]`} direction={"row"}
                                                  formObject={form2} {...newForm}  />
                }
            })

            //props.setState(no)
            return newresults

        }
            //setState({...state, prevGatas:no })
        const query = 'query a($filter:String!){gata_by_filter(filter:$filter){gata_no area bhaumik_year}}'
        const filterVar = {filter:JSON.stringify({khatauni_id:localStorage.khatauni_id, khata_no:state.khata_no})}

        const reportObject = new ReportObject(mycolumns, query,filterVar, fn)

        return ( <Stack><Stack direction={"column"}><ReactHookFormComponent formObject={form1} componentRootName={"existing"} {...mainForm}  /></Stack>
            <VariableGata form={gataForm} />

            <GenericReport tableComponent={<BasicTable/>} reportObject={reportObject} key={"report1"}/>
        </Stack>)


    }
    const VariableGata = (props) => {
        const [state,setState] = React.useState({children:[]})
        function removeElement(e){
            props.form.reset()
            const index = state.children.length
            state.children.pop()
            //props.remove(props.no + index - 1)
            setState({children:state.children})
        }

        function addGata(e) {
            const fields = [
                {name: `gata_no`, label: 'Gata No', required: true},
                {name: `area`, label: 'Area', required: true},
                {name: `bhaumik_year`, label: 'Fasli Year', required: true},
                {name:'removebtn', label:'Remove', comp:<Button onClick={removeElement}>Remove</Button>}

            ]
            const form2 = new ReactHookFormObject(defaultProps, defaultComponents,fields)

            state.children.push(<FieldArrayReactHookFormComponent  direction={"row"} componentRootName={`additional[${state.children.length}]`} formObject={form2} {...props.form} {...props}/>)
            setState({children:state.children})
        }
        //<ReactHookFormComponent  direction={"row"}formObject={form2} {...props}/>


        return (<><Button onClick={addGata}>Add Gata</Button> <div>{state.children}</div></>)
    }
    /*
    const FormComponent = (props) => {
        const [state,setState] = React.useState(0)


        return (<Stack>

           <EditableTable  setState={setState}{...props}/>
            {  <VariableGata  no={state} {...props}/> }
        </Stack>)
    }

     */
/*
    return (

<ReactHookForm formComponent={<FormComponent  />} fieldName="newone" yupSchema={yupSchema}  {...props}/>
    )
*/