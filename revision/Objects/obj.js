const user={
    name: "harsh",
    address: {
        city: "bhopal",
        pin : 462001,
        location: {
            lat:23.2,
            lng:77.4,
        },
    },
};

console.log(user.address.location.lng);

let {latt,lng} = user.address.location;
let {pin} = user.address;

console.log(pin);
