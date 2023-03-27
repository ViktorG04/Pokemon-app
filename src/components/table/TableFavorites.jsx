import React from "react";
import { Table, Image, Button } from "./TableElements";

const TableFavorites = ({ currentItems, onHandleDetails, onHandleDelete }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Alias</th>
          <th>Image</th>
          <th>Comments</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {currentItems.map((pokemon, index) => (
          <tr key={`favorite-${parseInt(index)}`}>
            <td>{pokemon.alias}</td>
            <td>
              <Image
                src={pokemon.image}
                alt={pokemon.name}
                onClick={() => onHandleDetails(pokemon.id)}
              />
            </td>
            <td>{pokemon.comment}</td>
            <td>
              <Button onClick={() => onHandleDelete(pokemon.id)}>delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableFavorites;
