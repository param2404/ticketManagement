/* eslint-disable */
import React from 'react';
import KanbanColumn from './KanbanColumn'

let projectList = [
  {
    currentStatusRm: 1,
    retailerShopName: "dfgh",
    contactPersonName: "ghbnj",
    retailerAddress: "ghjk",
    pincode: 456787,
    ticketType: "onBoarding",
    registedMobileNumber: 9876543678,
    rmName: "ghj",
  },
  {
    currentStatusRm: 3,
    retailerShopName: "ghj",
    contactPersonName: "ghbnj",
    retailerAddress: "ghjk",
    pincode: 456787,
    ticketType: "dormancySupport",
    registedMobileNumber: 9876543678,
    rmName: "ghj",
  },
  {
    currentStatusRm: 4,
    retailerShopName: "gghjhj",
    contactPersonName: "ghbnj",
    retailerAddress: "ghjk",
    pincode: 456787,
    ticketType: "onBoarding",
    registedMobileNumber: 9876543678,
    rmName: "ghj",
  },
  {
    currentStatusRm: 5,
    retailerShopName: "ghghj",
    contactPersonName: "ghbnj",
    retailerAddress: "ghjk",
    pincode: 456787,
    ticketType: "customerSupport",
    registedMobileNumber: 9876543678,
    rmName: "ghj",
  },
  {
    currentStatusRm: 3,
    retailerShopName: "ghj",
    contactPersonName: "ghbnj",
    retailerAddress: "ghjk",
    pincode: 456787,
    ticketType: "dormancySupport",
    registedMobileNumber: 9876543678,
    rmName: "ghj",
  },
  {
    currentStatusRm: 4,
    retailerShopName: "gghjhj",
    contactPersonName: "ghbnj",
    retailerAddress: "ghjk",
    pincode: 456787,
    ticketType: "onBoarding",
    registedMobileNumber: 9876543678,
    rmName: "ghj",
  },
  {
    currentStatusRm: 2,
    retailerShopName: "ghghj",
    contactPersonName: "ghbnj",
    retailerAddress: "ghjk",
    pincode: 456787,
    ticketType: "customerSupport",
    registedMobileNumber: 9876543678,
    rmName: "ghj",
  },
];

/*
 * The Kanban Board React component
 */
class KanbanBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      projects: [],
      draggedOverCol: 0,
    };
    this.columns = [
      { name: "Assigned", stage: 1, fmstage: 7 },
      { name: "Overdue", stage: 2, fmstage: 2 },
      { name: "Travel Mode", stage: 3, fmstage: 3 },
      { name: "On Site", stage: 4, fmstage: 4 },
      { name: "Closed", stage: 5, fmstage: 5 },
    ];
    this.handleOnDragEnter = this.handleOnDragEnter.bind(this);
    this.handleOnDragEnd = this.handleOnDragEnd.bind(this);
    this.interval = null;
  }

  componentWillMount() {
    this.setState({ projects: projectList, isLoading: false });
  }

  //this is called when a Kanban card is dragged over a column (called by column)
  handleOnDragEnter(e, stageValue) {
    this.setState({ draggedOverCol: stageValue });
  }

  //this is called when a Kanban card dropped over a column (called by card)
  handleOnDragEnd(e, project) {
    const updatedProjects = this.state.projects.slice(0);
    updatedProjects.find((projectObject) => {
      return projectObject.name === project.name;
    }).project_stage = this.state.draggedOverCol;
    this.setState({ projects: updatedProjects });
  }

  render() {
    return (
      <div>
        {this.columns.map((column) => {
          return (
            <KanbanColumn
              name={column.name}
              stage={column.stage}
              projects={this.state.projects.filter((project) => {
                return (
                  project.currentStatusRm === column.stage ||
                  project.currentStatusRm === column.fmstage
                );
              })}
              key={column.stage}
              onDragEnter={this.handleOnDragEnter}
              onDragEnd={this.handleOnDragEnd}
            />
          );
        })}
      </div>
    );
  }
}


export default KanbanBoard;
