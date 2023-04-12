import MangaList from '@/components/products/MangaList';
import { mockMangaData } from '@/mocks/mockMangaData';
import { fireEvent, render, screen } from '@testing-library/react';

describe('MangaList', () => {
  let details: HTMLButtonElement;
  beforeEach(() => {
    render(<MangaList mangaList={[mockMangaData.data[0]]} />);
    details = screen.getByText(/details/i);
  });

  it('should render 1 elem', async () => {
    expect(details).toBeInTheDocument();
  });

  it('should show modal after click on details btn', async () => {
    fireEvent.click(details);
    const scoreElem = screen.getByText(/9.14/i);
    expect(scoreElem).toBeInTheDocument();
  });
});
