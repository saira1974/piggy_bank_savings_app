const account = {
    name: "Olly",
    age: 11,
    account_type: 'Savings'

}

const AccountDetails = ({}) => {
    const {name, age, account_type} = account;

    return (
        <>
            <hr></hr>
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>Account Type: {account_type}</p>
            </>
    )
}

export default AccountDetails;
