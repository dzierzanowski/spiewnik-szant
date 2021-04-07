# TODO

### Chord diagram generation script
As a developer,
I want to have a JS script which uses [SVGuitar](https://github.com/omnibrain/svguitar)
library and a defined template,
So that I can easily and style-consistently generate chord diagrams like those on chordpic.com offline.

Example config for one of the existing diagrams:
```json
{
    "chord": {
        "fingers": [[4,2],[2,2],[6,"x"],[5,0],[3,0],[1,0]],
        "barres": []
    },
    "settings": {
        "style": "handdrawn",
        "strings": 6,
        "frets": 4,
        "position": 1,
        "nutSize": 0.65,
        "titleFontSize": 48,
        "color": "#000",
        "strokeWidth": 3,
        "fretSize": 1.6,
        "backgroundColor": "none",
        "fixedDiagramPosition": false,
        "tuning": ["E","A","D","G","h","e"],
        "title": "A7"
    }
}
```

