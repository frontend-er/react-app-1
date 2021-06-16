import  React from 'react';



class Status extends React.Component{

   render() {
      return (
         <div>
            {this.props.status}
            <input calue={this.props.status} />
         </div>
   )
   }
   
}

export default Status;