let xmlString = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;
let parser = new DOMParser();
let xmlDom = parser.parseFromString(xmlString, 'text/xml');
let student = xmlDom.querySelectorAll('student');
let result = {
  list: []
};

for(let i = 0; i < student.length; i++) {
  let nameFist = student[i].querySelector('first');
  let nameSecond = student[i].querySelector('second');
  let ageStudent = student[i].querySelector('age');
  let profStudent = student[i].querySelector('prof');
  let lang = student[i].querySelector('name').getAttribute('lang');

  let studentInfo = {
  name: nameFist.textContent + ' ' + nameSecond.textContent,
  age: ageStudent.textContent,
  prof: profStudent.textContent,
  lang: lang
  };
  
  result.list.push(studentInfo);
  
}
console.log(result);