/* eslint-disable */
import React from 'react';
import { Typography } from '@material-ui/core';
import TicketDetails from './TicketDetails';

class KanbanCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ details: false, tNumber: '' })

  }

  onDetailsOpen = () => {
    this.setState({ details: true })
  }

  onDetailsClose = () => {
    this.setState({ details: false })
  }

  render() {
    const assignedCardStyle = {
      'backgroundColor': '#e5e0e0',
      'paddingLeft': '0px',
      'paddingTop': '5px',
      'paddingBottom': '5px',
      'marginLeft': '0px',
      'marginRight': '5px',
      'marginBottom': '5px',
    };

    const overdueCardStyle = {
      'backgroundColor': '#f11551',
      'paddingLeft': '0px',
      'paddingTop': '5px',
      'paddingBottom': '5px',
      'marginLeft': '0px',
      'marginRight': '5px',
      'marginBottom': '5px',
    };
    const travelCardStyle = {
      'backgroundColor': '#f7de51',
      'paddingLeft': '0px',
      'paddingTop': '5px',
      'paddingBottom': '5px',
      'marginLeft': '0px',
      'marginRight': '5px',
      'marginBottom': '5px',
    };
    const onSiteCardStyle = {
      'backgroundColor': '#65cc59',
      'paddingLeft': '0px',
      'paddingTop': '5px',
      'paddingBottom': '5px',
      'marginLeft': '0px',
      'marginRight': '5px',
      'marginBottom': '5px',
    };
    const completedCardStyle = {
      'backgroundColor': '#a09d9d',
      'paddingLeft': '0px',
      'paddingTop': '5px',
      'paddingBottom': '5px',
      'marginLeft': '0px',
      'marginRight': '5px',
      'marginBottom': '5px',
    };
    const dataQueryCardStyle = {
      'backgroundColor': '#f17c8b',
      'paddingLeft': '0px',
      'paddingTop': '5px',
      'paddingBottom': '5px',
      'marginLeft': '0px',
      'marginRight': '5px',
      'marginBottom': '5px',
    };

    return (
      <div
        style={this.props.project.ticketType === "dataQuery" ? dataQueryCardStyle : this.props.project.currentStatusRm === 1 ? assignedCardStyle : this.props.project.currentStatusRm === 2 ? overdueCardStyle : this.props.project.currentStatusRm === 3 ? travelCardStyle : this.props.project.currentStatusRm === 4 ? onSiteCardStyle : completedCardStyle}
      draggable={true}
      onDragEnd={(e) => { this.props.onDragEnd(e, this.props.project); }}
      >
        <div><Typography align="justify" style={{ fontSize: "0.8rem", padding: '0.3rem' }}><strong>SHOP NAME: </strong>{this.props.project.retailerShopName}, <strong>CONTACT PERSON NAME: </strong>{this.props.project.contactPersonName}, <strong>RETAILER ADDRESS: </strong>{this.props.project.retailerAddress}, <strong>RETAILER PIN CODE: </strong>{this.props.project.pincode}, <strong>TICKET TYPE: </strong>{this.props.project.ticketType === "onBoarding" ? "Onboarding" : this.props.project.ticketType === "customerSupport" ? "Customer Support" : this.props.project.ticketType === "dormancySupport" ? "Dormancy Support" : "Uploaded Query"}, <strong>RETAILER CONTACT NUMBER: </strong>{this.props.project.registedMobileNumber}</Typography>
        </div> <p to="#" onClick={this.onDetailsOpen}>Details >> </p>
        {this.state.details && (<TicketDetails onDetailsClose={this.onDetailsClose} details={this.props.project} />)}
      </div>
    );
  }
}

export default KanbanCard;
