# REST API

## class

Here, you can find fields of each class :

#### Company

```
{
    id : integer,
    name : string,
    city : string
}
```

#### Person

```
{
    id : integer,
    company_id : integer,
    name : string,
    first_name : string
}
```

## GET

### Get all saves

Fetch all datas in the targeted table.

```
# template
POST localhost:3000/table_name

# example :
POST localhost:3000/person
```

### Get one save

Fetch datas about the targeted id in the targeted table.

```
# template
GET localhost:3000/table_name/id

# example :
GET localhost:3000/person/1
```

## POST

Create a save in the targeted table. You must complete each fields of the save (like the example below).

#### Company

```
# template
POST localhost:3000/company/name/city

# example :
POST localhost:3000/company/L_Oreal/Paris
```

#### Person

```
# template
POST localhost:3000/person/company_id/name/first_n_ame

# example :
POST localhost:3000/person/1/Bourlier/Simon
```

## PUT

Update datas about the targeted id in the targeted table. Fields names are the same than above (in class container).

```
# template
PUT localhost:3000/table_name/id/setParam

# example :
PUT localhost:3000/person/1/"name"="Example","first_name"="SecondExample"
```

## DELETE

Delete the targeted id in the targeted table.

```
# template
DELETE localhost:3000/table_name/id

# example :
DELETE localhost:3000/person/1
```
