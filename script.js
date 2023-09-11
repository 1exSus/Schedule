document.addEventListener('DOMContentLoaded', function () {
  const weekInfo = document.getElementById('weekInfo');
  const weekType = document.getElementById('weekType');
  const schedule = document.getElementById('schedule');

  const today = new Date();
  const currentWeek = Math.ceil((today.getDate() - 1) / 7);

  weekType.textContent = currentWeek % 2 === 0 ? 'Нечетная' : 'Четная';

  if (currentWeek % 2 === 0) {
    schedule.classList.add('even');
  }

  const scheduleData =
    currentWeek % 2 === 0 ? generateOddWeekSchedule() : generateEvenWeekSchedule();

  schedule.innerHTML = scheduleData;
});

function generateEvenWeekSchedule() {
  return `
        
    `;
}

function generateOddWeekSchedule() {
  return `
  <p>Понедельник:</p>
  <table>
      <tr>
          <td>8:00 - 9:30</td>
          <td>Вопросы цифровой обработки сигналов и ее техническое обеспечение</td>
          <td>Полетаев Д.А.</td>
      </tr>
      <tr>
          <td>9:50 - 11:20</td>
          <td>Вопросы цифровой обработки сигналов и ее техническое обеспечение</td>
          <td>Полетаев Д.А.</td>
      </tr>
      <tr>
          <td>11:30 - 13:00</td>
          <td>Межкультурное взаимодействие</td>
          <td>Масаев М.А.</td>
      </tr>
      <tr>
          <td>13:20 - 14:50</td>
          <td>Сетевые информационные технологии в телекоммуникационных системах</td>
          <td>Зуев С.А.</td>
      </tr>
  </table>
  <p>Вторник:</p>
  <table>
      <tr>
          <td>15:00 - 16:30</td>
          <td>Радиофизические методы измерений в системах связи	
          </td>
          <td>Мелешко А.Г.</td>
      </tr>
      <tr>
          <td>16:40 - 18:10</td>
          <td>Методология научных исследований	
          </td>
          <td>Мелешко А.Г.</td>
      </tr>
  </table>
  <p>Среда:</p>
  <table>
      <tr>
          <td>11:30 - 13:00</td>
          <td>Сетевые информационные технологии в телекоммуникационных системах	
          </td>
          <td>Зуев С.А.	
          </td>
      </tr>
      <tr>
          <td>13:20 - 14:50</td>
          <td>Радиофизические методы измерений в системах связи	
          </td>
          <td>Мелешко А.Г.	
          </td>
      </tr>
      <tr>
      <td>15:00 - 16:30</td>
      <td>Проектный менеджмент (в профессиональной деятельности)	

      </td>
      <td>Цветкова И.А.	

      </td>
  </tr>
  </table>
  <p>Четверг:</p>
  <table>
      <tr>
          <td>8:00 - 9:30</td>
          <td>Психология профессиональной деятельности	
          </td>
          <td>Колесникова	
          </td>
      </tr>
      <tr>
          <td>9:50 - 11:20</td>
          <td>Современные системы связи	
          </td>
          <td>Карцан И.Н.	
          </td>
      </tr>
      <tr>
          <td>11:30 - 13:00</td>
          <td>Современные системы связи	
          </td>
          <td>Карцан И.Н.	
          </td>
      </tr>
  </table>
  <p>Пятница:</p>
  <table>
  <tr>
      <td>15:00 - 16:30</td>
      <td>Технологии построения систем мобильной связи	

      </td>
      <td>Карцан И.Н.	
      </td>
  </tr>
  <tr>
      <td>16:40 - 18:10</td>
      <td>Технологии построения систем мобильной связи	

      </td>
      <td>Карцан И.Н.	
      </td>
  </tr>
  
</tr>
</table>
    `;
}
