import  React from 'react';



class Status extends React.Component{
   state = {
      editMode: false
   }

   activateeditMode () {
      this.setState({
         editMode: true
      })
   }

    deactivateeditMode () {
      this.setState({
         editMode: false
      })
   }


   render() {
      return (
         <div>
            {!this.state.editMode && <div onDoubleClick={this.activateeditMode.bind(this)}>{this.props.status}</div> }
            {this.state.editMode && <input autoFocus={true} onBlur={this.deactivateeditMode.bind(this)} value={this.props.status} />}
         </div>
      )
   }
   
}

export default Status;