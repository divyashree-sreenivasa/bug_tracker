const initialBugs = [
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

function BugRow(props) {

    const bug = props.bug;
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

function BugTable(props) {

    const bugRows =  props.bugs.map(bug => 
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

class BugAdd extends React.Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const form = document.forms.bugAdd;
        const bug = {
            owner: form.owner.value,
            title: form.title.value,
            status: 'New',
        }
        this.props.createBug(bug);
    }

    render() {
        return (
            <form name="bugAdd" onSubmit={this.handleSubmit}>
                <input type="text" name="owner" placeholder="Owner" />
                <input type="text" name="title" placeholder="Title" />
                <button>Add</button>
            </form>
        );
    }
}



class BugList extends React.Component {

    constructor() {
        super();
        this.state = { bugs: [] };
        this.createBug = this.createBug.bind(this);
    }

    loadData() {
        setTimeout(() => {
            this.setState({bugs: initialBugs})
        }, 500);
    }

    componentDidMount() {
        this.loadData();
    }

    createBug(bug) {
        bug.id = this.state.bugs.length + 1;
        bug.created = new Date();
        const newBugsList = this.state.bugs.slice();
        newBugsList.push(bug);
        this.setState({ bugs: newBugsList });
    }

    render() {
        return (
            <React.Fragment>
                <h1>Bug Tracker</h1>
                <BugFilter />
                <hr />
                <BugTable bugs={this.state.bugs} />
                <hr />
                <BugAdd createBug={this.createBug} />
            </React.Fragment>
        );
    }
}

const element = <BugList />;
ReactDOM.render(element, document.getElementById("content"));