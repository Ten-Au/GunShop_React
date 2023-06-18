export const customerList = [
    {
        "_id": 1,
        "firstName": "Artem",
        "lastName": "Sydorovych",
        "nickName": "presidentMira",
        "phoneNumber": "797 979 779",
    },
    {
        "_id": 2,
        "firstName": "Oleksandr",
        "lastName": "Podolich",
        "nickName": "Marquizy",
        "phoneNumber": "888 111 222",
    },
    {
        "_id": 3,
        "firstName": "Jill",
        "lastName": "Valentine",
        "nickName": "Unumbrella!",
        "phoneNumber": "123 123 123",
    }
]

export const customerDetailsList = [
    {
        "_id": 1,
        "firstName": "Artem",
        "lastName": "Sydorovych",
        "nickName": "presidentMira",
        "phoneNumber": "797 979 779",
        "appointments": [
            {
                "_id": 1,
                "cus_id": 1,
                "gun_id": 1,
                "date": "2022-12-23",
                "location": "Warszawa Centralna",
                "gunSeller": {
                    "_id": 1,
                    "gunNick": "Leon Kennedy",
                    "experience": "Military Specialist",
                    "salary": "50000",
                }
            }
        ]
    },
    {
        "_id": 2,
        "firstName": "Oleksandr",
        "lastName": "Podolich",
        "nickName": "Marquizy",
        "phoneNumber": "888 111 222",
        "appointments": [
            {
                "_id": 2,
                "cus_id": 2,
                "gun_id": 1,
                "date": "2022-01-13",
                "location": "Warszawa Wschodnia",
                "gunSeller": {
                    "_id": 1,
                    "gunNick": "Leon Kennedy",
                    "experience": "Military Specialist",
                    "salary": "50000",
                }
            },
            {
                "_id": 3,
                "cus_id": 2,
                "gun_id": 2,
                "date": "2022-11-30",
                "location": "Marszalkowska 32",
                "gunSeller": {
                    "_id": 2,
                    "gunNick": "IDarius",
                    "experience": "Advanced",
                    "salary": "20000",
                }
            }
        ]
    },
    {
        "_id": 3,
        "firstName": "Jill",
        "lastName": "Valentine",
        "nickName": "Unumbrella!",
        "phoneNumber": "123 123 123",
        "appointments": []
    }
]
