class BugFilter extends React.Component {
    render() {
        return (
            <div>This is a placeholder for the bug filter.</div>
        );
    }
}

class BugTable extends React.Component {
    render() {
        return (
            <div>This is a placeholder for the table of bugs.</div>
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