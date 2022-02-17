export const addContact = (contact) => ({
    type: "contacts/add", 
    payload: contact,
})

export const removeName = (name) => ({
    type: "contacts/remove",
    payload: name,
}
)