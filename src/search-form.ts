import { renderBlock } from './lib.js'

interface SearchFormData {
  city: string,
  arrivalDate: string,
  departureDate: string,
  maxDayPrice: number
}

export function renderSearchFormBlock(firstData: string, lastData: string): void {
  const minDate = firstData;
  const maxDate = lastData;
  const date = new Date();
  const arrivalDate = new Date(date.getFullYear(), date.getUTCMonth(), date.getDate() + 2).toISOString().split('T')[0];//Почему то выводится дата на 1 день меньше, поэтому добавляю 2 дня
  const departureDay = new Date(date.getFullYear(), date.getUTCMonth(), date.getDate() + 4).toISOString().split('T')[0];//Добавляю 4 дня по причине,указанной в варианте выше
  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value=${arrivalDate} min=${minDate} max=${maxDate} name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value=${departureDay} min=${minDate} max=${maxDate} name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}
