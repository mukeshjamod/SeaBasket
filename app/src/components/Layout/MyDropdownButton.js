import Dropdown from 'react-bootstrap/Dropdown';
import './MyDrop.css';

function MyDropdownButton() {
  return (
    <Dropdown >
      <Dropdown.Toggle id='toggle' className="dropdown bg-transparent border-0 text-dark " style={{fontSize:"10px"}}>
        All
      </Dropdown.Toggle>
      <Dropdown.Menu className="menu">
        <Dropdown.Item className="item">All categories</Dropdown.Item>
        <Dropdown.Item className="item" href="#">Electronic</Dropdown.Item>
        <Dropdown.Item className="item" href="#">Mobile</Dropdown.Item>
        <Dropdown.Item className="item" href="#/action-3">seller</Dropdown.Item>
        <Dropdown.Item className="item" href="#/action-3">shoes</Dropdown.Item>
        <Dropdown.Item className="item" href="#">Electronic</Dropdown.Item>
        <Dropdown.Item className="item" href="#">Mobile</Dropdown.Item>
        <Dropdown.Item className="item" href="#/action-3">seller</Dropdown.Item>
        <Dropdown.Item className="item" href="#/action-3">shoes</Dropdown.Item>

      </Dropdown.Menu>
    </Dropdown>
  );
}

export default MyDropdownButton;