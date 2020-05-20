import React , {Component} from 'react';
import AdminLayout from '../../../HOC/admin_layuot';
import FormField from '../../ui/formField';
import {validate} from '../../ui/misc';
import {firebasePlayers, firebase, firebaseDB} from '../../../firebase';
import FileUpload from '../../ui/fileUpload';

class AddEditPlayers extends Component {
    
    state = {
        playerId:'',
        formType:'',
        formError:false,
        formSuccess:'',
        defaultImg:'',
        formdata:{
            name:{
                element:'input',
                value:'',
                config:{
                    label:'Player Name',
                    name:'name_input',
                    type:'text'
                    
                },
                validation:{
                    required: true
                },
                valid:false,
                validationMessage:'',
                showlabel: true
            },
            lastname:{
                element:'input',
                value:'',
                config:{
                    label:'Player Last Name',
                    name:'lastname_input',
                    type:'text'
                    
                },
                validation:{
                    required: true
                },
                valid:false,
                validationMessage:'',
                showlabel: true
            },
            number:{
                element:'input',
                value:'',
                config:{
                    label:'Player Number',
                    name:'number_input',
                    type:'text'
                    
                },
                validation:{
                    required: true
                },
                valid:false,
                validationMessage:'',
                showlabel: true
            },
            position:{
                element:'select',
                value:'',
                config:{
                    label:'Select position ',
                    name:'select_position',
                    type:'select',
                    options: [
                        {key:"Keeper",value:"Keeper"},
                        {key:"Defence",value:"Defence"},
                        {key:"Midfield",value:"Midfield"},
                        {key:"Striker",value:"Striker"}
                    ]
                },
                validation:{
                    required: true
                },
                valid:false,
                validationMessage:'',
                showlabel: true
            },
            image:{
                element:'image',
                value:'',
                validation:{
                    required:true
                },
                valid:false
            }
        }
    }

    updateFields = (player, playerId, type, image) => {
        const newFormdata = {...this.state.formdata}

        for(let key in newFormdata){
            newFormdata[key].value = player[key];
            newFormdata[key].valid = true;
        }

        this.setState({
            playerId,
            defaultImg: image,
            formType: type,
            formdata: newFormdata
        })
    }

    componentDidMount(){
        const playerId = this.props.match.params.id;

        if(!playerId){
            this.setState({
                formType:'Add player'
            })
        }else{
            firebaseDB.ref(`players/${playerId}`).once('value')
            .then(snapshot =>{
                const playerData = snapshot.val();

                firebase.storage().ref('players')
                .child(playerData.image).getDownloadURL()
                .then(url => {
                    this.updateFields( playerData, playerId,'Edit player', url)
                }).catch(error =>{
                    this.updateFields(
                        {
                            ...playerData,
                            image:''
                        },playerId,'Edit player',''
                    )
                })
            })
        }
    }
    //i parametrow content einai mono gia to image uploader epeidi ekei den exw event
    //to content exei to filename tis eikonas 
    updateForm(element, content = ''){
        //dimiourgw antigrafo tou state gia 
        // na min enimeronetai sunexeia
        //alla mono sto telos
        const newFormdata = {...this.state.formdata}
        const newElement = {...newFormdata[element.id]} 

        if(content === ''){
            //pairnei tin timi apo to field
            newElement.value = element.event.target.value;
        }else{
            
            newElement.value = content
        }
       
        let validData = validate(newElement);
        newElement.valid=validData[0];
        newElement.validationMessage=validData[1]
        //tin pernaw stin newFormdata 
        newFormdata[element.id] = newElement;

        this.setState({
            formError:false,
            formdata: newFormdata
        })
    }

    successForm = (message) =>{
        this.setState({
            formSuccess: message
        });
        setTimeout(()=>{
            this.setState({
                formSuccess:''
            });
        },3000)
    }

    submitForm(event){
        event.preventDefault();

        let dataToSubmit= {};
        let formIsValid = true;

        for(let key in this.state.formdata){
            dataToSubmit[key] = this.state.formdata[key].value;
            //elenxos kai sto formIsValid gt prepei na einai ola ta pedia true
            formIsValid = this.state.formdata[key].valid && formIsValid; 
        }

        

        if(formIsValid){
            if(this.state.formType === 'Edit player'){
                firebaseDB.ref(`players/${this.state.playerId}`)
                .update(dataToSubmit).then(()=>{
                    this.successForm('Update Succesfully')
                }).catch(error=>{
                    this.setState({formError: true})
                })
            }else{
                firebasePlayers.push(dataToSubmit).then(()=>{
                    this.props.history.push('/admin_players')
                }).catch(error=>{
                    this.setState({
                        formError: true
                    })
                })
            }
            
        }else{
            this.setState({
                formError:true
            })
        }
    }

    resetImage(){
        const newFormdata = {...this.state.formdata};
        newFormdata['image'].value= '';
        newFormdata['image'].valid=false;
        this.setState({
            defaultImg:'',
            formdata: newFormdata
        })
    }


    storeFilename(filename){
        this.updateForm({id:'image'},filename)
    }
    
    render(){
        return(
            <AdminLayout>
                <div className="editplayers_dialog_wrapper">
                    <h2>
                        {this.state.formType}
                    </h2>
                    <div>
                        <form onSubmit={(event)=>this.submitForm(event)}>
                            <FileUpload
                                dir="players"
                                tag={"Player Image"}
                                defaultImg={this.state.defaultImg}
                                defaultImgName={this.state.formdata.image.value}
                                resetImage={()=>this.resetImage()}
                                filename={(nameOfFile)=>this.storeFilename(nameOfFile)}
                            />
                            
                            <FormField
                                id={'name'}
                                formdata={this.state.formdata.name}
                                change={(element) => this.updateForm(element)}
                            />

                            <FormField
                                id={'lastname'}
                                formdata={this.state.formdata.lastname}
                                change={(element) => this.updateForm(element)}
                            />

                            <FormField
                                id={'number'}
                                formdata={this.state.formdata.number}
                                change={(element) => this.updateForm(element)}
                            />

                            <FormField
                                id={'position'}
                                formdata={this.state.formdata.position}
                                change={(element) => this.updateForm(element)}
                            />

                            <div className="success_label">{this.state.formSuccess}</div>
                            {this.state.formError ?
                                <div className="error_label">
                                    Something is wrong
                                </div>
                                : ''
                            }
                            <div className="admin_submit">
                                <button onClick={(event) => this.submitForm(event)}>
                                    {this.state.formType}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </AdminLayout>
        )
    }
}

export default AddEditPlayers;