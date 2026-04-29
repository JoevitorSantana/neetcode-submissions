class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        let indexStudents

        while (sandwiches.length > 0) {
            let top =  sandwiches[0] // sandwiches.shift()
            console.log('pilha de sanduiches: ', sandwiches)
            console.log('top: ', top)
            indexStudents = students.length
            console.log('indexStudents: ', indexStudents)
            // buscar quem da fila de estudantes quer o lanche do topo
            while (indexStudents > 0) {
                console.log("fila de estudantes: ", students)
                // se o lanche do topo for o desejado sair da fila
                if (students[0] == top) {
                    console.log('lanche desejado é o desejado pelo estudante: ', students[0], top)
                    students.shift()
                    sandwiches.shift()
                    break
                } else {
                    let first = students.shift()
                    students.push(first)
                    console.log("foi para o final")
                    console.log("fila de estudantes: ", students)
                }
                indexStudents--
            }
            
            if (indexStudents == 0) { 
                console.log("fim, estudantes na fila: ", students.length) 
                return students.length
            }
        }

        return students.length
    }
}
