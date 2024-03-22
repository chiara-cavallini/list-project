import { Injectable } from "@angular/core";
import { ListItem } from "../models/list-item";

@Injectable({
  providedIn: "root",
})
export class ListService {
    items: ListItem[] = [
      {
        id: "3f8a39b4-293b-49fb-a6a9-6e1fb30e0d9e",
        title: "Inception",
        description: "Thriller psicologico, 148 minuti"
      },
      {
        id: "a99fa192-fd62-4b86-8976-dc8cf29e57bf",
        title: "Interstellar",
        description: "Fantascienza, 169 minuti"
      },
      {
        id: "0eb058c4-d676-4992-af9a-4750d3fe643b",
        title: "The Shawshank Redemption",
        description: "Drammatico, 142 minuti"
      },
      {
        id: "714e352e-83a6-45a1-975a-99f6c4e9c7c6",
        title: "The Dark Knight",
        description: "Azione, 152 minuti"
      },
      {
        id: "6a63cc9d-79db-4f02-b2e2-8d6e0a947892",
        title: "Pulp Fiction",
        description: "Crime, 154 minuti"
      }
      ];
    
      constructor() { }
    
      getItems() {
        return this.items;
      }
    
      getItemById(id: string) {
        return this.items.find(item => item.id === id);
      }
    
      updateItem(item: any) {
        const index = this.items.findIndex(i => i.id === item.id);
        if (index !== -1) {
          this.items[index] = item;
        }
      }
}