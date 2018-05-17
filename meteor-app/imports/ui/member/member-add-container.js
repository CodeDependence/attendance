import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data';
import MemberAdd from '/imports/ui/member/member-add'
import Members from '/imports/api/members/members';

export default withTracker((props) => {

  const onSubmit = ({formData}) => {
    // proxy event gets sent through first, data follows in second call for some reason.
    if(formData != undefined){
      console.log(formData)
    }
  }

  return {
    onSubmit,
  }
})(MemberAdd)