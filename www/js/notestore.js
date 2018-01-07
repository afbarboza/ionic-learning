angular.module( 'mynotes.notestore', [] )
    .factory( 'NoteStore', function () {

        var notes = [
            {
                id          : '1',
                title       : 'First Note',
                description : 'This is my first note'
            },
            {
                id          : '2',
                title       : 'Second Note',
                description : 'This is my second note'
            },
            {
                id          : '3',
                title       : 'Third Note',
                description : 'This is my third note'
            }
        ];

        return {
            list : function () {
                return notes;
            },

            get : function ( noteId ) {
                for ( var i = 0; i < notes.length; i++ ) {
                    if ( notes[ i ].id === noteId ) {
                        return notes[ i ];
                    }
                }
                return undefined;
            },

            create : function ( note ) {
                notes.push( note );
            },

            update : function ( note ) {
                for ( var i = 0; i < notes.length; i++ ) {
                    if ( notes[ i ].id === note.id ) {
                        notes[ i ] = note;
                        return;
                    }
                }
            }
        }
    } );