const stuffData = {
  firstName: 'John',
  secondName: 'Smith',
  age: 42,
  gender: 'male',
  role: 'CEO',
  yearsOfExperience: 22,
  inCompanySince: '03 Aug 2005',
  subordinators: [
      {
          firstName: 'Jane',
          secondName: 'Clark',
          age: 34,
          gender: 'female',
          role: 'Chief HR officer',
          yearsOfExperience: 12,
          inCompanySince: '12 May 2017',
          subordinators: [
              {
                  firstName: 'Ferenz',
                  secondName: 'Derd',
                  age: 27,
                  gender: 'male',
                  role: 'Senior HR manager',
                  yearsOfExperience: 7,
                  inCompanySince: '15 Oct 2019',
                  subordinators: [
                      {
                          firstName: 'Gregor',
                          secondName: 'Bur',
                          age: 26,
                          gender: 'male',
                          role: 'Middle HR manager',
                          yearsOfExperience: 7,
                          inCompanySince: '22 Apr 2020',
                          subordinators: [
                              {
                                  firstName: 'Caleb',
                                  secondName: 'Ottvik',
                                  age: 24,
                                  gender: 'male',
                                  role: 'Junior HR manager',
                                  yearsOfExperience: 7,
                                  inCompanySince: '04 Jun 2020',
                                  subordinators: null
                              },
                              {
                                  firstName: 'Peri',
                                  secondName: 'Hafar',
                                  age: 22,
                                  gender: 'female',
                                  role: 'Junior HR manager',
                                  yearsOfExperience: 7,
                                  inCompanySince: '18 Dec 2021',
                                  subordinators: null
                              }
                          ]
                      },
                  ]
              },
              {
                  firstName: 'Syenn',
                  secondName: 'Gungvind',
                  age: 38,
                  gender: 'female',
                  role: 'Senior HR manager',
                  yearsOfExperience: 15,
                  inCompanySince: '12 May 2012',
                  subordinators: [
                      {
                          firstName: 'Enos',
                          secondName: 'Zey',
                          age: 30,
                          gender: 'male',
                          role: 'Middle HR manager',
                          yearsOfExperience: 5,
                          inCompanySince: '18 Dec 2020',
                          subordinators: [
                              {
                                  firstName: 'Caleb',
                                  secondName: 'Ottvik',
                                  age: 24,
                                  gender: 'male',
                                  role: 'Junior HR manager',
                                  yearsOfExperience: 7,
                                  inCompanySince: '04 Jun 2020',
                                  subordinators: null
                              }
                          ]
                      },
                      {
                          firstName: 'Caleb',
                          secondName: 'Ottvik',
                          age: 24,
                          gender: 'male',
                          role: 'Junior HR manager',
                          yearsOfExperience: 7,
                          inCompanySince: '04 Jun 2020',
                          subordinators: null
                      },
                      {
                          firstName: 'Peri',
                          secondName: 'Hafar',
                          age: 22,
                          gender: 'female',
                          role: 'Junior HR manager',
                          yearsOfExperience: 7,
                          inCompanySince: '18 Dec 2021',
                          subordinators: null
                      },
                  ]
              },
              {
                  firstName: 'Enos',
                  secondName: 'Zey',
                  age: 30,
                  gender: 'male',
                  role: 'Middle HR manager',
                  yearsOfExperience: 5,
                  inCompanySince: '18 Dec 2020',
                  subordinators: [
                      {
                          firstName: 'Caleb',
                          secondName: 'Ottvik',
                          age: 24,
                          gender: 'male',
                          role: 'Junior HR manager',
                          yearsOfExperience: 7,
                          inCompanySince: '04 Jun 2020',
                          subordinators: null
                      }
                  ]
              },
              {
                  firstName: 'Gregor',
                  secondName: 'Bur',
                  age: 26,
                  gender: 'male',
                  role: 'Middle HR manager',
                  yearsOfExperience: 7,
                  inCompanySince: '22 Apr 2020',
                  subordinators: [
                      {
                          firstName: 'Caleb',
                          secondName: 'Ottvik',
                          age: 24,
                          gender: 'male',
                          role: 'Junior HR manager',
                          yearsOfExperience: 7,
                          inCompanySince: '04 Jun 2020',
                          subordinators: null
                      },
                      {
                          firstName: 'Peri',
                          secondName: 'Hafar',
                          age: 22,
                          gender: 'female',
                          role: 'Junior HR manager',
                          yearsOfExperience: 7,
                          inCompanySince: '18 Dec 2021',
                          subordinators: null
                      }
                  ]
              },
              {
                  firstName: 'Caleb',
                  secondName: 'Ottvik',
                  age: 24,
                  gender: 'male',
                  role: 'Junior HR manager',
                  yearsOfExperience: 7,
                  inCompanySince: '04 Jun 2020',
                  subordinators: null
              },
              {
                  firstName: 'Peri',
                  secondName: 'Hafar',
                  age: 22,
                  gender: 'female',
                  role: 'Junior HR manager',
                  yearsOfExperience: 7,
                  inCompanySince: '18 Dec 2021',
                  subordinators: null
              },
          ]
      },
      {
          firstName: 'Olga',
          secondName: 'Petrenko',
          age: 31,
          gender: 'female',
          role: 'CTO',
          yearsOfExperience: 12,
          inCompanySince: '15 Apr 2019',
          subordinators: [
              {
                  firstName: 'Peter',
                  secondName: 'Barton',
                  age: 29,
                  gender: 'male',
                  role: 'JS competence manager',
                  yearsOfExperience: 11,
                  inCompanySince: '01 Feb 2020',
                  subordinators: null
              },
          ]
      },
      {
          firstName: 'Jack',
          secondName: 'Black',
          age: 45,
          gender: 'male',
          role: 'Office manager',
          yearsOfExperience: 20,
          inCompanySince: '24 Apr 2016',
          subordinators: null
      }
  ]
}

function parsingStuff(workersData, property) {
  const workerArray = [];

  flatStaff(workersData, workerArray);
  const uniqueWorkers = filterUniqueWorkers(workerArray);
  const sortedWorkers = uniqueWorkers.sort(byProperty(property));
  printStuff(sortedWorkers);

}

// переводимо об єкт в масив, щоб було зручно працювати
function flatStaff(stuffStructure, accumulatingArray) {
  accumulatingArray.push(stuffStructure);

  if (stuffStructure.subordinators === null) {
    return;
  }

  stuffStructure.subordinators.forEach((subordinator) => {
    flatStaff(subordinator, accumulatingArray);
  })
}

function filterUniqueWorkers(workers) {
  const allWorkers = workers.map((worker) => {
    return [`${worker.firstName} ${worker.secondName}`, worker];
  });

  return Array.from(new Map(allWorkers).values());
}

function byProperty(property = 'age') {
  return (a, b) => a[property] < b[property] ? 1 : -1;
}

function printStuff(workers) {
  workers.forEach((worker) => {
    const { firstName, secondName, yearsOfExperience } = worker;
    console.log(`${firstName} ${secondName} work here ${yearsOfExperience}`)
  })
}

parsingStuff(stuffData, 'yearsOfExperience');