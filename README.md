# list-parser
 
Parses lists in a markdown-like format into a json object:

```markdown
# My List

## Groceries
  - Vegetables
    - [ ] Carrot
    - [ ] Letucce
```

into 

```json
{
  "title": "My List",
  "type": "list",
  "children": [
    {
      "title": "Groceries",
      "type": "group",
      "children": [
        {
          "title": "Vegetables",
          "type": "checkbox",
          "children": [
            {
              "title": "Carrot",
              "type": "multipleChoice",
              "children": []
            },
            {
              "title": "Letucce",
              "type": "multipleChoice",
              "children": []
            }
          ]
        }
      ]
    }
  ]
}

```