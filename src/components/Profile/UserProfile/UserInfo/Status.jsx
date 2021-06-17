import  React from 'react';



class Status extends React.Component{

   state = {
      editMode: false ,
      status: this.props.status     
   }

   activateeditMode =  () => {
      this.setState({
         editMode: true
      })
   }

    deactivateeditMode = () => {
      this.setState({
         editMode: false
      });
      this.props.updateUserProfileStatus(this.state.status);
   }
   debugger;
   onStatusChange = (e) => {
     this.setState({
        
        status: e.currentTarget.value
     }) 

   }

   componentDidUpdate(prevProps, prevState) {
      if (prevProps.status !== this.props.status) {
         this.setState({
            status: this.props.status
         })
      }
   }


   render() {
      return (
         <div>
            {!this.state.editMode && <div onDoubleClick={this.activateeditMode}>{this.props.status }</div> }
            {this.state.editMode && <input onChange={this.onStatusChange}  autoFocus={true} onBlur={this.deactivateeditMode} value={this.state.status} />}
         </div>
      )
   }
   
}

export default Status;