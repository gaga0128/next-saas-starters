import styled from 'styled-components';


export default function Footer () {
    return (
        <ListContainer>
            <List>
                <ListHeader>lorem</ListHeader>
                <ListItem>ipsum</ListItem>
                <ListItem>ipsum</ListItem>
                <ListItem>ipsum</ListItem>
                <ListItem>ipsum</ListItem>
            </List>
            <List>
                <ListHeader>lorem</ListHeader>
                <ListItem>ipsum</ListItem>
                <ListItem>ipsum</ListItem>
                <ListItem>ipsum</ListItem>
                <ListItem>ipsum</ListItem>
            </List>
            <List>
                <ListHeader>lorem</ListHeader>
                <ListItem>ipsum</ListItem>
                <ListItem>ipsum</ListItem>
                <ListItem>ipsum</ListItem>
                <ListItem>ipsum</ListItem>
            </List>
            <List>
                <ListHeader>lorem</ListHeader>
                <ListItem>ipsum</ListItem>
                <ListItem>ipsum</ListItem>
                <ListItem>ipsum</ListItem>
                <ListItem>ipsum</ListItem>
            </List>
            <List>
                <ListHeader>lorem</ListHeader>
                <ListItem>ipsum</ListItem>
                <ListItem>ipsum</ListItem>
                <ListItem>ipsum</ListItem>
                <ListItem>ipsum</ListItem>
            </List>
        </ListContainer>
    )
}

const ListContainer = styled.div`
    display: flex;    
    flex-direction: row;
    justify-content: space-evenly;
`

const List = styled.ul`
    list-style-type: none;
`

const ListHeader = styled.li`
    font-weight: bold;
    font-size: 1.5rem;
`
const ListItem = styled.li`
    font-size: 1.3rem;
`