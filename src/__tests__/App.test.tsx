import 'whatwg-fetch';
import { renderWithProviders } from '@/utils/test-utils';
import { fireEvent, screen } from '@testing-library/react';
import { App } from '@/App';
import { fillAllFieldsValid } from './ProductForm.test';

describe('App', () => {
  let nextBtn: HTMLButtonElement;
  let prevBtn: HTMLButtonElement;
  let formBtn: HTMLButtonElement;
  let homeBtn: HTMLButtonElement;
  beforeEach(async () => {
    renderWithProviders(<App />);
    nextBtn = await screen.findByTestId('next-page-button');
    prevBtn = await screen.findByTestId('prev-page-button');
    formBtn = screen.getByText(/form/i);
    homeBtn = screen.getByText(/home/i);
  });
  it('should render different content on page change', async () => {
    expect(await screen.findByText(/Monster/i)).toBeInTheDocument();
    expect(await screen.findByText(/death note/i)).toBeInTheDocument();
    fireEvent.click(nextBtn);
    expect(await screen.findByText(/666 satan/i)).toBeInTheDocument();
    expect(await screen.findByText(/hunter x hunter/i)).toBeInTheDocument();
    fireEvent.click(prevBtn);
    expect(await screen.findByText(/Monster/i)).toBeInTheDocument();
    expect(await screen.findByText(/death note/i)).toBeInTheDocument();
  });
  it('should render same content w/o fetch after route change', async () => {
    expect(await screen.findByText(/Monster/i)).toBeInTheDocument();
    fireEvent.click(nextBtn);
    expect(await screen.findByText(/666 satan/i)).toBeInTheDocument();
    expect(await screen.findByText(/hunter x hunter/i)).toBeInTheDocument();
    fireEvent.click(formBtn);
    expect(screen.getByText(/I consent to my personal data/i)).toBeInTheDocument();
    fireEvent.click(homeBtn);
    expect(screen.getByText(/hunter x hunter/i)).toBeInTheDocument();
  });
  it('search input should save typed value', async () => {
    const searchInput = screen.getByPlaceholderText(/search.../i);
    fireEvent.change(searchInput, { target: { value: 'chainsaw man' } });
    fireEvent.click(formBtn);
    fireEvent.click(homeBtn);
    expect((searchInput as HTMLInputElement).value).toBe('chainsaw man');
  });
  it('should render content based on search value', async () => {
    expect(await screen.findByText(/Monster/i)).toBeInTheDocument();
    const searchInput = screen.getByPlaceholderText(/search.../i);
    const searchBtn = screen.getByText(/search/i);
    fireEvent.change(searchInput, { target: { value: 'chainsaw man' } });
    fireEvent.click(searchBtn);
    expect(await screen.findByText(/lost man/i)).toBeInTheDocument();
  });
  it('should save content after form submit and route change', async () => {
    fireEvent.click(formBtn);
    await fillAllFieldsValid();
    const submitBtn = screen.getByText(/submit/i);
    fireEvent.click(submitBtn);
    await fillAllFieldsValid();
    fireEvent.click(submitBtn);
    const names = screen.getAllByText(/ivan/i);
    expect(names.length).toBe(2);
    fireEvent.click(homeBtn);
    expect(screen.getByText(/Monster/i)).toBeInTheDocument();
    fireEvent.click(formBtn);
    const formCards = screen.getAllByText(/ivan/i);
    expect(formCards).toBeInTheDocument;
  });
});
