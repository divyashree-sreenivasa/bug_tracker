const bugs = [
    {
        id: 1, 
        status: 'New', 
        owner: 'Ravan', 
        effort: 5, 
        created: new Date('2018-08-15'), 
        due: undefined,
        title: 'Error in console when clicking Add',
    },
    {
        id: 2, 
        status: 'Assigned', 
        owner: 'Eddie', 
        effort: 14,
        created: new Date('2018-08-16'), 
        due: new Date('2018-08-30'),
        title: 'Missing bottom border on panel',
    },
];

class BugFilter extends React.Component {
    render() {
        return (
            <div>This is a placeholder for the bug filter.</div>
        );
    }
}

class BugRow extends React.Component {
    render() {
        const bug = this.props.bug;
        return (
            <tr>
                <td>{bug.id}</td>
                <td>{bug.status}</td>
                <td>{bug.owner}</td>
                <td>{bug.created.toDateString()}</td>
                <td>{bug.effort}</td>
                <td>{bug.due ? bug.due.toDateString() : ''}</td>
                <td>{bug.title}</td>
            </tr>
        );
    }
}

class BugTable extends React.Component {
    render() {
        const rowStyle = {border: "1px solid lightblue", padding: 5};
        const bugRows =  bugs.map(bug => 
            <BugRow key={bug.id} bug={bug} />
        );
        return (
            <table className="bordered-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Status</th>
                        <th>Owner</th>
                        <th>Created Date</th>
                        <th>Effort</th>
                        <th>Due Date</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {bugRows}
                </tbody>
            </table>
        );
    }
}

class BugAdd extends React.Component {
    render() {
        return (
            <div>This is a placeholder for a form to add a bug.</div>
        );
    }
}



class BugList extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Bug Tracker</h1>
                <BugFilter />
                <hr />
                <BugTable />
                <hr />
                <BugAdd />
            </React.Fragment>
        );
    }
}

const element = <BugList />;
ReactDOM.render(element, document.getElementById("content"));